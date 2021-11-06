pub fn run(){
    println!("|----------------------------------------------------------------------------------|");
    println!("Hello vars.rs");
    let mut age : i32 = 15;//mutable
    let name = "Erik";//immutable
    println!("My name is {} and I am {}", name, age);
    age = 16;
    println!("My name is {} and I am {}", name, age);

    const ID : i32 = 001;
    println!("ID: {}", ID);
    println!("|----------------------------------------------------------------------------------|");
}