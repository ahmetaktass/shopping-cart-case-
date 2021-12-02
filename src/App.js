import React, { Component } from 'react'
import Header from './components/Header'
import Container from './layout/Container'
import Content from './layout/Content'
import ShoppingDetails from './layout/ShoppingDetails'
import Sidebar from './layout/Sidebar'

export default class App extends Component {
  render() {
    return (      
      <div>
        <Header />
        <Container>
          <Sidebar />
          <Content />
          <ShoppingDetails />
        </Container>
      </div>
    )
  }
}
