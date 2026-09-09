#include <stdio.h>

#include <stdlib.h>

typedef struct {

 double V;

 double R;

 double X;

} Electric_current;

int main(int argc, char* argv[]) {

 if (argc == 3) {

  printf("The arguments are enough.\n");

 } else if (argc < 3) {

  printf("The arguments are insufficient.\n");

  return 1;

 } else if (argc > 3) {

  printf("Too many arguments\n");

  return 1;

 }

 Electric_current I = {0};

 char* p = NULL;

 I.V = strtod(argv[1], &p);

 if (*p != '\0') {

  printf("Invalid R.\n");

  return 1;

 } else {

  printf("Valid R.\n");

 }

 I.R = strtod(argv[2], &p);

 if (*p != '\0') {

  printf("Invalid I.\n");

  return 1;

 } else {

  printf("Valid I.\n");

 }

 I.X = I.V / I.R;

 printf("%f A\n", I.X);

 return 0;

}
