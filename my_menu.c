/*
** EPITECH PROJECT, 2018
** 
** File description:
** 
*/

#include "stdlib.h"
#include "stdio.h"

struct Menu {
    char *name;
    char *dish;
    char *drink;
};

//La fonction create_my_menu a un probleme ...
//Le main n'a pas à etre changé

struct Menu *create_my_menu(char *name, char *dish, char *drink)
{
    struct Menu *menu;

    menu->name = name;
    menu->dish = dish;
    menu->drink = drink;
    return (menu);
}

int main(int ac, char **av)
{
    struct Menu *my_menu;

    if (ac > 3) {
        my_menu = create_my_menu(av[1], av[2], av[3]);
        printf("Mon menu :\n\tNom : %s\n\tBoisson : %s\n\tPlat : %s\n",
            my_menu->name, my_menu->dish, my_menu->drink);
        free(my_menu);
    }
    return (0);
}
