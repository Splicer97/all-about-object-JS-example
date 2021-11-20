const person = Object.create({}, {
  name: {
    value: "Nikita",
    //изначально значения переменной, созданные через Object.create не видны при переборе
    enumerable: true,
    //теперь значения видно при переборе
    writable: true,
    //теперь значения можно перезаписывать
    configurable: true
    //теперь значения можно удалять
  },
  birthDate: {
    value: 1997
  },
  age: {
    get() {
      return new Date().getFullYear() - this.birthDate
    },
    //через get мы делаем определенные вычисления
    set(value) {
      document.body.style.background = "red"
      console.log('Set age', value)
    }
    //через set мы можем выполнять что либо, если приходит новое значение в age(но оно не будет перезаписано)
  }
})

for (let key in person) {
  console.log("Key", key, person[key])
}

person.name = "Oleg"