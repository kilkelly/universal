import React from "react"
import moment from "moment"

export default class Subreddits extends React.Component {

	constructor() {
		super()
		this.setSubreddit = this.setSubreddit.bind(this)		
	}

	// ------------------
	noItems() {
		return <h3>No data</h3>
	}

	// ------------------
	fetching() {
		return <h3>Refreshing titles...</h3>
	}	

	// ------------------
	items() {
		return(
			<ul>
				{this.props.items.slice(0, 5).map((item, index) =>
					<li key={index}><a href={item.get("url")} target="_blank">{item.get("title")}</a> <a href={"http://www.reddit.com" + item.get("permalink")} target="_blank">(comments)</a></li>
				)}
			</ul>
		)
	}

	// ------------------
	refreshSubreddit() {
		this.props.refreshSubreddit(this.props.selectedSubreddit)
	}	

	// ------------------
	setSubreddit(e) {
		e.preventDefault()
		this.props.setSubreddit(
			document.getElementById("subreddit").value
		)
	}		

	// ------------------
	render() {	
		if (this.props.isFetching) {
			this.componentHTML = this.fetching()  
		} else if (!this.props.items) {
			this.componentHTML = this.noItems()  
		} else {
			this.componentHTML = this.items()
		}	

		return(				
		<div>
			Current subreddit is <input id="subreddit" type="text" defaultValue={this.props.selectedSubreddit}/>&nbsp;
			<form onSubmit={this.setSubreddit}><button>Set</button></form>
			Last updated on {moment(this.props.lastUpdate).format("dddd, MMMM Do YYYY, h:mm:ss a")}&nbsp;
			<button onClick={() => this.refreshSubreddit()}>Refresh</button>			
			{this.componentHTML}
		</div>
		)
	}
}