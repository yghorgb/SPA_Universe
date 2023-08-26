export class Router {
  routes = {}

  add(routename, page) {
    this.routes[routename] = page
  }

  route (event) { 
    event = event || window.event


    if (event) { 
      event.preventDefault()
      const target = event.target.dataset.href || event.target
      window.history.pushState({}, "", target)       
    }

    this.handle()
  }

  handle() {
    const { pathname } = window.location
    const route = this.routes[pathname] || this.routes[404]

    fetch(route)
    .then(response => response.text())
    .then(response => document.querySelector("#app").innerHTML = response)

  }
}