import random
#todo: changer la taille des cells en fonction de la taille de la grille
def setup():
    global grid, m, cell_size
    size(500, 500)
    m = 10  # Taille de la grille 10x10
    grid = [[0 for _ in range(m)] for _ in range(m)]
    for i in range(m):
        for j in range(m):
            grid[i][j] = Cell(i * 50, j * 50, 50, 50, 0)
    
    # Générer trois cellules positives aléatoires
    k = 3
    randomCells = random.sample(range(m * m), k)
    replace_empty(grid, randomCells)

def draw():
    background(200)
    for row in grid:
        for cell in row:
            cell.display()

def replace_empty(grid, c):
    m = len(grid)
    for i in c:
        row = i // m
        col = i % m
        if grid[row][col].angle == 0:  # .angle utilisé comme variable pour stocker l'état de la cell
            grid[row][col].angle = 1  # indique que la cellule est positive

class Cell:
    def __init__(self, x, y, w, h, angle):
        self.x = x
        self.y = y
        self.w = w
        self.h = h
        self.angle = angle

    def display(self):
        stroke(255)
        if self.angle == 1:  # si cell positive, blanche
            fill(255)
        else:  # si cell negative, noire
            fill(0)
        rect(self.x, self.y, self.w, self.h)
