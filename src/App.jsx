import React,{Component} from 'react';
import './App.css';
import Clock from './Clock';



class App extends Component{
	constructor(props){
		super(props);
		this.state={
			deadline:'Nov,25,2017'
		};
	}

	changeDeadLine(){
		this.setState({deadline:this.state.newDeadline});
	}

	render(){
		return(
		<div className='App'>
			<div className='App-title'> Countdown to {this.state.deadline}</div>
			<Clock 
			deadline={this.state.deadline}
			/>
			<div>
				<input 
					placeholder='new date' 
					onChange={event => this.setState({newDeadline:event.target.value})}
				></input>

				<button onClick={()=>{this.changeDeadLine()}}>
					Submit 
				</button>	
			</div>
			
		</div>
		)
	}
}

export default App;