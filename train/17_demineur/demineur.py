import random

def replace_empty(grid, c):
    m = len(grid)  # number of rows
    n = len(grid[0])  # number of columns
    for i in c:
        row = i // n
        col = i % n
        if 0 <= row < m and 0 <= col < n:  # Check if within bounds
            if grid[row][col] == 0:
                grid[row][col] = 1
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