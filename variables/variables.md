# Variables

## Different keywords
- var (nie powinno, się używać, tylko jak potrzebujesz zasięg funkcyjny)
- let (zmienna)
- const (stała – domyślnie tą należy używać)

---

| x | var |   let    | const |
| ---: | :---: |:--------:| :---: |
| redeclaration | ok (quirks mode) |    no    | no |
| Reinitialization | ok |    ok    | no |
| scope | function |  block   | block | block |
| hoisting | ok | ok (TDZ) | ok (TDZ) |  