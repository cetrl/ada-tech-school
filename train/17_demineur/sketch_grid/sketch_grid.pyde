m = 10

def setup():
    global m, grid
    size(500, 500)
    grid = [[0 for _ in range(m)] for _ in range(m)]
    for i in range(m):
        for j in range(m):
            grid[i][j] = Cell(i * 50, j * 50, 50, 50, 0)

def draw():
    global m, grid
    background(0)
    for i in range(m):
        for j in range(m):
            grid[i][j].display()

def makeGrid():
    return [[0 for _ in range(m)] for _ in range(m)]

class Cell:
    def __init__(self, x, y, w, h, angle):
        self.x = x
        self.y = y
        self.w = w
        self.h = h
        self.angle = angle

    def display(self):
        stroke(255)
        fill(80)
        rect(self.x, self.y, self.w, self.h)
