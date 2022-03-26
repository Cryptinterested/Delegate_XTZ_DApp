const bakerAddress = "tz1S6H83gugqK4dR5Had9jWR9M1ZdAAVgU5e"; // Replace with baker address
const bakerName = "Baking.Finance"; // Replace with baker name / website

// Initiate DAppClient
const client = new beacon.DAppClient({
    name: bakerName,
});

const delegate = () => {
    client.requestOperation({
        operationDetails: [
            {
                kind: beacon.TezosOperationType.DELEGATION,
                delegate: bakerAddress,
            },
        ],
    });
};

// Add event listener to the button
document.getElementById("init").addEventListener("click", () => {
    // Check if we have an active account
    client.getActiveAccount().then((activeAccount) => {
        if (activeAccount) {
            // If we have an active account, send the delegate operation directly
            delegate();
        } else {
            // If we don't have an active account, we need to request permissions first and then send the delegate operation
            client.requestPermissions().then((permissions) => {
                delegate();
            });
        }
    });
});