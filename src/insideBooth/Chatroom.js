import React from 'react';
import ReactDOM from 'react-dom';
import './booth.css';

import Message from './Message.js';

class Chatroom extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            chats: [{
                username: "Kevin Hsu",
                content: <p>Hello World!</p>,
                img: "http://i.imgur.com/Tj5DGiO.jpg",
            }, {
                username: "Alice Chen",
                content: <p>Love it! :heart:</p>,
                img: "http://i.imgur.com/Tj5DGiO.jpg",
            }, {
                username: "Kevin Hsu",
                content: <p>Check out my Github at https://github.com/WigoHunter</p>,
                img: "http://i.imgur.com/Tj5DGiO.jpg",
            }, {
                username: "KevHs",
                content: <p>Lorem ipsum dolor sit amet, nibh ipsum. Cum class sem inceptos incidunt sed sed. Tempus wisi enim id, arcu sed lectus aliquam, nulla vitae est bibendum molestie elit risus.</p>,
                img: "http://i.imgur.com/ARbQZix.jpg",
            }, {
                username: "Kevin Hsu",
                content: <p>So</p>,
                img: "http://i.imgur.com/Tj5DGiO.jpg",
            }, {
                username: "Kevin Hsu",
                content: <p>Chilltime is going to be an app for you to view videos with friends</p>,
                img: "http://i.imgur.com/Tj5DGiO.jpg",
            }, {
                username: "Kevin Hsu",
                content: <p>You can sign-up now to try out our private beta!</p>,
                img: "http://i.imgur.com/Tj5DGiO.jpg",
            }, {
                username: "Alice Chen",
                content: <p>Definitely! Sounds great!</p>,
                img: "http://i.imgur.com/Tj5DGiO.jpg",
            }]
        };

        this.submitMessage = this.submitMessage.bind(this);
    }

    componentDidMount() {
        this.scrollToBot();
        let chats= JSON.parse(localStorage.getItem("chats"));
        if (chats) {
            this.setState({
                chats: chats
            },() => console.log(this.state.chats))
        }
        
    }

    componentDidUpdate() {
        this.scrollToBot();
    }

    scrollToBot() {
        ReactDOM.findDOMNode(this.refs.chats).scrollTop = ReactDOM.findDOMNode(this.refs.chats).scrollHeight;
    }

    submitMessage(e) {
        e.preventDefault();

        this.setState({
            chats: this.state.chats.concat([{
                username: "Kevin Hsu",
                content: <p>{ReactDOM.findDOMNode(this.refs.msg).value}</p>,
                img: "http://i.imgur.com/Tj5DGiO.jpg",
            }])
        }, () => {
            ReactDOM.findDOMNode(this.refs.msg).value = "";
            localStorage.setItem("chats", JSON.stringify(this.state.chats))
        });
    }

    // uploadMessage = (chat) => {
    //     const url = "https://sodi-backend.herokuapp.com/message";
    
    //     fetch(url, {
    //       method: "POST",
    //       headers: {
    //         Accept: "application/json",
    //         "Content-Type": "application/json",
    //       },
    //       body: JSON.stringify(chat)
    //     })
      
    // }

    // handleListHouse = (address, city, district, ward, street, number) => {
    //     const url = "http://localhost:5000/sell";
    //     const token = "Token " + this.state.token;
    
    //     fetch(url, {
    //       method: "POST",
    //       headers: {
    //         Accept: "application/json",
    //         "Content-Type": "application/json",
    //         Authorization: token
    //       },
    //       body: JSON.stringify({
    //         address: address,
    //         city: city,
    //         district: district,
    //         ward: ward,
    //         street: street,
    //         number: number
    //       })
    //     })
    //       .then(response => {
    //         return response.json();
    //       })
    //       .then(data => {
    //         console.log(data);
    //       });
    //   };

    render() {
        const username = "Kevin Hsu";
        const { chats } = this.state;

        return (
            <div className="chatroom">
                <h3>Discussion</h3>
                <ul className="chats" ref="chats">
                    {
                        chats.map((chat) => 
                            <Message chat={chat} user={username} />
                        )
                    }
                </ul>
                <form className="input" onSubmit={(e) => this.submitMessage(e)}>
                    <input type="text" ref="msg" />
                    <input type="submit" value="Submit" />
                </form>
            </div>
        );
    }
}

export default Chatroom;