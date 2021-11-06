pub fn run() {
    println!("|----------------------------------------------------------------------------------|");
    println!("Hell is print.rs");

    println!("{} {} DED in {}", "Idiots", "are", 1);

    println!("{1} {0} DED in {2}", "are", "Idiots", 1);

    println!("{who} {whatever} DED in {num}", who = "Idiots", whatever = "are", num = 1);

    println!("Binary: {:b}, Hex: {:x}, Octal: {:o}", 10, 10, 10);

    println!("{:?}", (12, true, false, "hello"));

    println!("10 + 10 = {}", 10 + 10);
    println!("|----------------------------------------------------------------------------------|");
}