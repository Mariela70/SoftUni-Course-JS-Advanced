function solve(areaIN, volIN, input) {
   return JSON.parse(input).map(cube => ({
    area: areaIN.call(cube),
    volume:volIN.call(cube)
   }))
}