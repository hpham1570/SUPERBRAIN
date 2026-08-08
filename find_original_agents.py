import os
for step in [214, 477, 653, 659, 1219, 1731, 1873, 1877, 1879, 1889, 1893]:
    fname = f"step_{step}_run_methods.txt"
    if os.path.exists(fname):
        print(f"{fname}: size {os.path.getsize(fname)}")
