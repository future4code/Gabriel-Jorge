
// const a:number = process.argv[2]
// const b:number = process.argv[3]
// const c:number = process.argv[4]

function checaTriangulo(a:number, b:number, c:number) {
    if (a !== b && b !== c) {
      return "Escaleno";
    } else if (a === b && b === c) {
      return "Equilátero";
    } else {
      return "Isósceles";
    }
  }

  console.log(checaTriangulo(2,2,2))