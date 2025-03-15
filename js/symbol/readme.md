# Symbol

- 唯一值


- 可迭代对象
  Object.getOwnPropertyDescriptirs(classMstes) 对象上的属性描述符
  - 虽然 symboles emumberable 属性是true 但任然不可枚举
    因为Symbols 独特设计，就是提供唯一值的，只能通过
    getOwnPropertyDescriptirs 方法获取到属性描述符

-  ownProperty