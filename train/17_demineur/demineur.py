import random

#remplace randomly 0 cells by 1 cells
def replace_empty(grid, c):
    m = len(grid[0])  # columns nb
    print(c)
    for i in c:
        row = i // m
        col = i % m
        if grid[row][col] == 0:  #vérifie que la cell est bien negative
            grid[row][col] = 1   #la rend positive
    return grid

# create grid with m² cells
m = 5
emptyGrid = [[0 for columns in range(m)] for row in range(m)]

# random positives cells
k = 3
randomCells = random.sample(range(m*m), k)

randomGrid = replace_empty(emptyGrid, randomCells)

for row in randomGrid:
    print(row)