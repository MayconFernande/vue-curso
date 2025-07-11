<template>
  <div class="content">
    <div class="preview">
      <CollapsibleSection>
        <template #collapse>
          &#x25B2; Hide
        </template>
        <template #expand>
          &#x25BC; Show
        </template>
        <div class="preview-content">
          <div class="top-row">
            <img
              :src="selectedRobot.head.imageUrl"
              alt=""
            >
          </div>
          <div class="middle-row">
            <img
              :src="selectedRobot.leftArm.imageUrl"
              alt=""
              class="rotate-left"
            >
            <img
              :src="selectedRobot.torso.imageUrl"
              alt=""
            >
            <img
              :src="selectedRobot.rightArm.imageUrl"
              alt=""
              class="rotate-right"
            >
          </div>
          <div class="bottom-row">
            <img
              :src="selectedRobot.base.imageUrl"
              alt="imageUrl/"
            >
          </div>
        </div>
      </CollapsibleSection>
      <button
        class="add-to-cart"
        @click="addToCart()"
      >
        Add to Cart
      </button>
    </div>
    <div class="top-row">
      <div class="robot-name">
        {{ selectedRobot.head.title }}
        <span
          v-if="selectedRobot.head.onSale"
          class="sale"
        >Sale!</span>
      </div>
      <PartSelector
        :parts="availableParts.heads"
        position="top"
        @part-selected="part => selectedRobot.head=part"
      />
    </div>
    <div class="middle-row">
      <PartSelector
        :parts="availableParts.arms"
        position="left"
        @part-selected="part => selectedRobot.leftArm=part"
      />
      <PartSelector
        :parts="availableParts.torsos"
        position="center"
        @part-selected="part => selectedRobot.torso=part"
      />
      <PartSelector
        :parts="availableParts.arms"
        position="right"
        @part-selected="part => selectedRobot.rightArm=part"
      />
    </div>
  </div>
  <div class="bottom-row">
    <PartSelector
      :parts="availableParts.bases"
      position="bottom"
      @part-selected="part => selectedRobot.base=part"
    />
  </div>
  <div>
    <h1>Cart</h1>
    <table>
      <thead>
        <tr>
          <th>Robot</th>
          <th class="cost">
            Cost
          </th>
        </tr>
      </thead>
      <tbody>
        <tr
          v-for="(robot, index) in cart"
          :key="index"
        >
          <td>{{ robot.head.title }}</td>
          <td class="cost">
            {{ toCurrency(robot.cost || 0) }}
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script setup>

import { computed, ref, onMounted } from 'vue';
import CollapsibleSection from '@/shared/CollapsibleSection';
import { toCurrency } from '../shared/formatters';
import PartSelector from './PartSelector';
import parts from '../data/parts';

const availableParts = parts;
const cart = ref([]);

onMounted(() => console.log('onMounted executed'));
const selectedRobot = ref({
  head: {},
  leftArm: {},
  torso: {},
  rightArm: {},
  base: {},
});

// eslint-disable-next-line no-unused-vars
const headBorderColor = computed(() => (selectedRobot.value.head.onSale ? 'red' : '#aaa'));

const addToCart = () => {
  const robot = selectedRobot.value;
  const cost = robot.head.cost
    + robot.leftArm.cost
    + robot.torso.cost
    + robot.rightArm.cost
    + robot.base.cost;
  cart.value.push({ ...robot, cost });
  console.log(cart.value.length);
};

</script>

<style>
.part {
  position: relative;
  width: 200px;
  height: 200px;
  border: 3px solid #aaa;
}

.part img {
  width: 200px;
}

.top-row {
  display: flex;
  justify-content: space-around;
}

.middle-row {
  display: flex;
  justify-content: center;
}

.bottom-row {
  display: flex;
  justify-content: space-around;
  border-top: none;
}

.top {
  border-bottom: none;
}

.left {
  border-right: none;
}

.right {
  border-left: none;
}

.left img {
  transform: rotate(-90deg);
}

.right img {
  transform: rotate(90deg);
}

.bottom {
  border-top: none;
}

.prev-selector {
  position: absolute;
  z-index: 1;
  top: -3px;
  left: -28px;
  width: 25px;
  height: 206px;
}

.next-selector {
  position: absolute;
  z-index: 1;
  top: -3px;
  right: -28px;
  width: 25px;
  height: 206px;
}

.center .prev-selector,
.center .next-selector {
  opacity: 0.8;
}

.left .prev-selector {
  top: -28px;
  left: -3px;
  width: 179px;
  height: 25px;
}

.left .next-selector {
  top: auto;
  bottom: -28px;
  left: -3px;
  width: 179px;
  height: 25px;
}

.right .prev-selector {
  top: -28px;
  left: 24px;
  width: 179px;
  height: 25px;
}

.right .next-selector {
  top: auto;
  bottom: -28px;
  left: 24px;
  width: 179px;
  height: 25px;
}

.right .next-selector {
  right: -3px;
}
.robot-name{
  position: absolute;
  top: -25px;
  text-align: center;
  width: 100%;
}
.sale{
  color: red;
}
.content {
  position: relative;
}
.preview {
  position: absolute;
  top: -20px;
  right: 0;
  width: 310px;
  height: 310px;
  padding: 5px;
}

.preview-content {
  border: 1px solid #999;
}

.preview img {
  width: 70px;
  height: 70px;
}

.rotate-right {
  transform: rotate(90deg);
}

.rotate-left {
  transform: rotate(-90deg);
}
.add-to-cart {
  position: absolute;
  width:310px;
  padding:3px;
  font-size:16px;
}
td,
th {
  text-align: left;
  padding: 5px;
  padding-right: 20px;
}
.cost{
  text-align: right;
}
 </style>
