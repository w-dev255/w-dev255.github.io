#include <stdio.h>

#include <stdlib.h>

typedef struct {

 double X;

 double I;

 double R;

} Tension;

int main(int argc, char* argv[]) {

 if (argc == 3) {

  printf("The arguments are enough.\n");

 } else {

  printf("Insufficient arguments.\n");

  return 1;

 }

 char* p = NULL;

 Tension V = {0};

 V.I = strtod(argv[1], &p);

 if (p == argv[1]) {

  printf("Invalid I\n");

  return 1;

 } else {

  printf("Valid I\n");

 }

 V.R = strtod(argv[2], &p);

 if (p == argv[2]) {

  printf("Invalid R\n");

  return 1;

 } else {

  printf("Valid R\n");

 }

 V.X = V.I * V.R;

 printf("%f V\n", V.X);

 return 0;

}
