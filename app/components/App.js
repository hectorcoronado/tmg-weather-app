var React = require('react')
var ReactRouter = require('react-router-dom')
var Router = ReactRouter.BrowserRouter
var Route = ReactRouter.Route
var Switch = ReactRouter.Switch

var Home = require('./Home')

class App extends React.Component {
    render () {
        return (
            <Router>
                <div className="container">
                    <Switch>
                        <Route exact path='/' component={Home} />
                        <Route render={function () { return <p>not found</p>}} />
                    </Switch>
                </div>
            </Router>
        )
    }
}

module.exports = App