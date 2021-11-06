/*
Primitive types--
Integers: u8, i8, u16, i16, u32, i32, u64, i64, u128, i128 (number of bits they take in memory)
Floats: f32, f64
Boolean (bool)
Characters (char)
Tuples
Arrays
*/
//statically typed but compiler can usually infer type

pub fn run(){
    println!("|----------------------------------------------------------------------------------|");
    println!("Hello types.rs");
    println!("i32 MAX: {}", std::i32::MAX);
    println!("i64 MAX: {}", std::i64::MAX);
    println!("i128 MAX: {}", std::i128::MAX);
    println!("f32 MAX: {}", std::f32::MAX);
    println!("f64 MAX: {}", std::f64::MAX);
    let is_active = true;
    let is_greater: bool = 10 > 5;
    let a1 = 'a';
    let face: char = '\u{1F600}';
    println!("{:?}", (is_active, is_greater, a1, face));
    println!("|----------------------------------------------------------------------------------|");
}