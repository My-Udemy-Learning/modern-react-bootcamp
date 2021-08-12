class App extends React.Component {
render(){
    return(
        <div>
            <Friend 
            name="Elton"
            hobbies={['Piano', 'Singing', 'Dancing']}
            />
            <Friend 
            name="Frida"
            hobbies={['Cooking', 'Painting', 'Hiking']}
            />
        </div>
    )
}
}
ReactDOM.render(<App />, document.getElementById('root'))