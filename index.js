// javascript
// d3.select()
// d3.selectAll()

// d3.select('h1'). style('color', 'blue') 
// .attr('class', 'heading')
// .text('updated the h1 tag')

// d3.select('body').append('p').text('first paragraph')
// d3.select('body').append('p').text('second paragraph')
// d3.select('body').append('p').text('third paragraph')
// d3.select('body').append('p').text('forth paragraph')

// d3.selectAll('p').style('color', 'green')





var dataset = [1, 2, 3, 4, 5]

d3.select('body')
.selectAll('p')
.data(dataset)
.enter()
.append('p')
// .text('D3 is awesome!!')
.text(function(d) { return d})

d3.selectAll('p').style('color', 'red')