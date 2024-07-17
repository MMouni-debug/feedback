import Feedback from './Components'

import './App.css'

const resources = {
  emojis: [
    {
      id: 0,
      name: 'Sad',
      imageUrl: 'https://tse3.mm.bing.net/th?id=OIP.FNx8zNSGAWV306j1BsocDAHaHk&pid=Api&P=0&h=180',
    },
    {
      id: 1,
      name: 'None',
      imageUrl: 'https://assets.ccbp.in/frontend/react-js/none-emoji-img.png',
    },
    {
      id: 2,
      name: 'Happy',
      imageUrl: 'https://tse1.mm.bing.net/th?id=OIP.baJgAzbanFoKdGA8XnG7qAHaHa&pid=Api&P=0&h=180',
    },
  ],
  loveEmojiUrl: 'https://tse3.mm.bing.net/th?id=OIP.lBh-2EtIpP_DYl6lQuSrSwHaHa&pid=Api&P=0&h=180',
}

const App = () => <Feedback resources={resources} />

export default App