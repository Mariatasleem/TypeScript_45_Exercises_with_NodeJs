//  Define the make_album function

function make_album(artist_name: string, album_title: string, tracks?: number){
    let album: {artist: string, title: string, tracks?: number} = {
                artist: artist_name,
                title: album_title,
    };
    if(tracks !== undefined){
        album.tracks = tracks;
    }
    
    return album; 
}

// calling three functions and creating 3 variables with different values.
let album1 = make_album("Maria", "Album title 1");

let album2 = make_album("Muhammad", "Album title 2");

// Calling a make_album fuction with third parameter which is optional
let album3 = make_album("Waliha", "Album title 3", 10);

// Printing the Variables
console.log(album1);
console.log(album2);
console.log(album3);