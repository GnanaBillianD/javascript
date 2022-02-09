for (let alerts = 0; alerts < 4; alerts++) {
    let one = (alerts == 1);//one alert?
    let is = one ? "is" : "are";//choose if condtion true "is" or false "are"
    let s = one == 1 ? "" : "s";//choose if condition true "" or false "s"
    let message = `there ${is} ${alerts} alert${s}`;
    console.log(message);
}