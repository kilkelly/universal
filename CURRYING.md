DEFINITIONS
-----------

// uncurried - function that requires multiple arguments
function QueryDBUncurried(db, table, field) {
	return query(db, method, field) // psuedocode
}

// curried - multiple functions that take exactly one argument each
function QueryDB(db) {
	return function(table) {		
		return function(field) {
			return query(db, method, field) // psuedocode
		}
	}	
}

// currying, ES6 style (arrow functions)
var QueryDB = db => table => field => {
	return queryDB(db, table, field) // psuedocode
}


CALLING
-------

// uncurried - function that requires multiple arguments
var location = QueryDBUncurried("my_db", "users", "location"))


// curried - multiple functions that take exactly one argument each
var location = QueryDB("my_db")("users")("location")


var QueryMyDBUsers = QueryDB("my_db")("users")
var location = QueryMyDBUsers("name")




