import Menu from './menu';
import { BrowserRouter as Router } from 'react-router-dom';
import './App.css';

function App() {
    return (
        <Router>
            <div>
                <header>
                    <Menu
                        className="my-menu"
                        title="Page Title"
                        menu={{
                            "Group 1": { 
                                items: [
                                    {
                                        label: "Link 1",
                                        to: "/uri1"
                                    },
                                    {
                                        label: "Link 2",
                                        to: "/uri2"
                                    },
                                    {
                                        label: "Link 3",
                                        to: "/uri3"
                                    },
                                    {
                                        label: "Link 4",
                                        to: "/uri4"
                                    }
                                ],
                                show: true
                            },
                            "Group 2": {
                                items: [
                                    {
                                        label: "Link 1",
                                        to: "/uri1"
                                    },
                                    {
                                        label: "Link 2",
                                        to: "/uri2"
                                    },
                                    {
                                        label: "Link 3",
                                        to: "/uri3"
                                    }
                                ],
                                show: false
                            }
                        }}/>
                </header>
            </div>
        </Router>
     );
}

export default App;
