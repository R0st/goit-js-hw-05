# goit-js-hw-05

Алгоритм поиска свойства в цепочке прототипов: 1. Поиск начинается в
ссобственных свойствах 2. Если свойства нет в собственных, поиск переходит к
цепочкее протортипов 3. Поиск прекращается при первом совпадении(есть такое
свойство 4. Возвращается значения свойства) Интерфейс - набор доступных свойств,
методов.

!!!Свойство prototype есть только у ф-конструктора, у обьекто это свойство
**proto**.

В прототипах хранят методы!!! Чтобы не обьявлять их внутри ф-конструктора,
потому что их будет целая пачка в экземпляре
