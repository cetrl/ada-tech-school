import pytest
from demineur import replace_empty

def test_replace_empty():
    grid = [[0, 0, 0],
            [0, 0, 0],
            [0, 0, 0]]
    cells_to_replace = [1, 4, 7]
    
    result = replace_empty(grid, cells_to_replace)
    
    expected = [[0, 1, 0],
                [0, 1, 0],
                [0, 1, 0]]
    
    assert result == expected

def test_replace_empty_out_of_bounds():
    grid = [[0, 0],
            [0, 0]]
    cells_to_replace = [0, 1, 2, 3, 4]  # 4 is out of bounds
    
    result = replace_empty(grid, cells_to_replace)
    
    expected = [[1, 1],
                [1, 1]]
    
    assert result == expected