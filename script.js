// Create a variable to hold your NFTs
let nfts = [];

// This function will take in some values as parameters, create an
// NFT object using the parameters passed to it for its metadata, 
// and store it in the variable above.
function mintNFT() {
    const name = document.getElementById("name").value;
    const creator = document.getElementById("creator").value;
    const description = document.getElementById("description").value;
    const image = document.getElementById("image").value;

    // Create the NFT object
    const nft = {
        name: name,
        creator: creator,
        description: description,
        image: image
    };
    
    // Store the NFT object in the array
    nfts.push(nft);

    // Clear input fields
    document.getElementById("name").value = '';
    document.getElementById("creator").value = '';
    document.getElementById("description").value = '';
    document.getElementById("image").value = '';

    alert("NFT Minted Successfully!");
}

// Create a "loop" that will go through an "array" of NFTs
// and print their metadata with console.log()
function listNFTs() {
    const nftList = document.getElementById("nftList");
    nftList.innerHTML = '';

    for (let i = 0; i < nfts.length; i++) {
        const nftItem = document.createElement("div");
        nftItem.classList.add("nft-item");
        nftItem.innerHTML = `
            <p><strong>Name:</strong> ${nfts[i].name}</p>
            <p><strong>Creator:</strong> ${nfts[i].creator}</p>
            <p><strong>Description:</strong> ${nfts[i].description}</p>
            <p><strong>Image:</strong> <a href="${nfts[i].image}" target="_blank">${nfts[i].image}</a></p>
        `;
        nftList.appendChild(nftItem);
    }
}

// Print the total number of NFTs we have minted to the console
function showTotalSupply() {
    const totalSupply = getTotalSupply();
    document.getElementById("totalSupply").innerText = `Total Supply: ${totalSupply}`;
}

function getTotalSupply() {
    return nfts.length;
}
