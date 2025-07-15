export default function (element, binding) {
  element.style.position = 'absolute';
  Object.keys(binding.value).forEach((key) => {
    element.style[key] = binding.value[key];
  });
}

// partselector v-pin="{bottom: '5px', right: '5px'}"
/* element.style.position = 'absolute';
    Object.keys(binding.modifiers).forEach((key) => {
      element.style[key] = binding.value[key];
    }); */
