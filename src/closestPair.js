

const points = [ [2,1], [4,0], [-1,0], [5,3], [-2,5], [3,-3], [-2,0], [3,4], [5,-4], [0,-2] ]

let graph = (vertix) => {
  this.vertices = vertix
  this.edges = 0
  this.adjacent = []
  for( let index = 0; index < this.vertices; index++) {
    this.adjacent[index] = []
    this.adjacent[index].push('')
  }
  this.addEdge = addEdge
  this.showGraph = showGraph
  this.depthFirstSearch = depthFirstSearch
  this.marked = []
  for( let value = 0; value < this.vertices; value++) {
    this.marked[value] = false
  }
}

const addEdge = (hortizonalValue, verticalValue) => {
  this.adjacent[hortizonalValue].push(verticalValue)
  this.adjacent[verticalValue].push(hortizonalValue)
  this.edges++
}

const showGraph = () => {
  for(let graphVal = 0; graphVal < this.vertices; graphVal++) {
    // putstr(graphVal + " -> ")
    for(let i = 0; i < this.vertices; i++){
      if(this.adjacent[graphVal][i] != undefined)
        this.adjacent[graphVal][i]
    }
    console.log()
  }
}

const depthFirstSearch = (vertices) => {
  this.marked[vertices] = true
  if (this.adjacent[vertices] != undefined){
    console.log('visited vertex:::::  ' + vertices)
  }
  for (let point in this.adjacent[vertices]) {
    if(!this.marked[point] ){
      this.depthFirstSearch(point)
    }
  }
}

let g = graph(5)
addEdge(0,1)
addEdge(0,2)
addEdge(1,3)
addEdge(2,4)
showGraph()
depthFirstSearch(0)

const closestPair = (points) => {
  return points
}

module.exports = {
  closestPair
}
