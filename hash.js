/*
* Get a two dimension array matching the key
*
* element[0] will be the key
* element[1] will be the value
*/
function getHashKey(array,key)
{ 
	for(var kv in array)
	{ 
		if( kv == null ) return null; 
		if( kv[0] == key )
		{ 
			return kv[1]; 
		} 
	}
	return null; 
}
/*
* Store a key/value pair in the specified array
* The array will look like this after calling this fonction (in JSON format here)
[
  [key1,value1],
]
*
*/
function setHashKey(array,key,value)
{ 
	for(var kv in array)
	{ 
		if( kv[0] == key )
		{ 
			kv[0] = value;
			return; 
		} 
	} 
	push(array,[key,value]); 
	return; 
}
/*
* Removes the given key (and its value) from the hash table
*/
function removeHashKey(array,key)
{
	for (var kv in array
	{
		if(kv[0] == key)
		{ 
			removeElement(array, kv); 
		} 
	} 
}
/* 
* Prints the content of the array (for debugging purpose)
*/
function printHash(array)
{
	for (var kv in array)
	{ 
		debug(kv[0] +" = "+kv[1]); 
	}
}

// ---- USAGE ----
var hash = [];
setHashKey(hash,'key1','myvalue');
debug(getHashKey(hash,'key1'));
removeHashKey(hash,'key1');
printHash(hash);