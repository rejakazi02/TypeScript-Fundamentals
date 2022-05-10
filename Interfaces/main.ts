interface Point {

    x: number,
    y: number

}

let drawPoint = (Point: Point) => {
console.log(Point)

}

drawPoint({
    x: 1,

    y: 3
})