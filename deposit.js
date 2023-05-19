function Deposit() {
    return (
       <Card 
       bgcolor="grey"
       textcolor="black"
       header="Make your deposit here.(If you dare)"
       title="Welcome to the Bank"
       text="You can use this bank at your own risk"
       body={(<img src="./img/badBank.png" className="img-fluid"
       alt="Responsive image"/>)}
       />
    );
}