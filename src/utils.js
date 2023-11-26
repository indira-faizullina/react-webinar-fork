const propNames = new Set(['id', 'className', 'textContent', 'onclick']);

/**
 * Создание элемента со свойствами и вложенными элементами
 * @param name {String} Название HTML тега
 * @param props {Object} Свойства и атрибуты элемента
 * @param children {...Node} Вложенные элементы
 * @returns {HTMLElement}
 */
export function createElement(name, props = {}, ...children) {
  const element = document.createElement(name);

  // Назначение свойств и атрибутов
  for (const name of Object.keys(props)) {
    if (propNames.has(name)) {
      element[name] = props[name];
    } else {
      element.setAttribute(name, props[name]);
    }
  }

  // Вставка вложенных элементов
  for (const child of children) {
    element.append(child);
  }

  return element;
}


// База используемых слов и их форм во множественном числе
const words = [
  {
  value: 'раз',
  variants: ['раз', 'раза'],
  getVariant(num) {
      if (String(num).slice(-2) >= 12 && String(num).slice(-2) <= 14) {
          return this.variants[0]
      } else if(String(num).slice(-1) >= 2 && String(num).slice(-1) <= 4) {
          return this.variants[1]
      } else {
          return this.variants[0]
      }
  }
}
]

// Функция, возвращающая слово, в зависимости от его формы множественного числа
export function getWordForm(num, value) {
  const word = words.filter(word => word.value === value)[0]
  return word.getVariant(num)
}
