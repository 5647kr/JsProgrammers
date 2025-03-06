function solution(phone_number) {
  return phone_number.slice(0, phone_number.length - 4).replaceAll(/[0-9]/g, "*") + phone_number.slice(phone_number.length - 4);
}