import React from 'react';


class SearchBar extends React.Component{
    constructor(props){
        super(props);
        this.state={
            term:''
        }
    }
    onFormSubmit=(e)=>{
        e.preventDefault()
        this.props.onSubmit(this.state.term);
    }
    render(){
        return (
            <div className="ui segment">
                <form className="ui form" onSubmit={this.onFormSubmit}>
                    <div className="field">
                        <label>Image Search</label>
                        <input className="" value={this.state.searchvalue} type="text" onChange={(e) => this.setState({term:e.target.value})}/>
                    </div>
                </form>
            </div>
        );
    }

}
export default SearchBar;