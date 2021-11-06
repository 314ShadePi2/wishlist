// Primitive str = immutable fixed-length string somewhere in memory
// String = Growable, heap-allocated data structure -Use when you need to modify or own string data


pub fn run(){
    println!("|----------------------------------------------------------------------------------|");
    println!("Hello strings.rs");
    let primitive_str = "hello";
    let n_string = String::from("Hello");
    println!("primitive: {}, String: {}", primitive_str, n_string);
    println!("|----------------------------------------------------------------------------------|");
}