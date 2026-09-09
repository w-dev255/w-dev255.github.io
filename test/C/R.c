#include <stdio.h>

#include <stdlib.h>

typedef struct {

 double V;

 double I;

 double X;

} Electric_resistance;

int main(int argc, char* argv[]) {

 if (argc == 3) {

  printf("The arguments are enough.\n");

 } else if (argc < 3) {

  printf("The arguments are insufficient.\n");

  return 1;

 } else if (argc > 3) {

  printf("Too many arguments.\n");

  return 1;

 }

 Electric_resistance R = {0};

 char* p = NULL;

 R.V = strtod(argv[1], &p);

 if (*p != '\0') {

  printf("Invalid V.\n");

  return 1;

 }

 R.I = strtod(argv[2], &p);

 if (*p != '\0') {

  printf("Invalid I.\n");

 }

 R.X = R.V / R.I;

 printf("%f Ω\n", R.X);

 return 0;

}
