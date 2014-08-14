models.js
-> renderElement
states: - amount = 0 | bitcount < costs (dont show)
        - amount = 0 | bitcount > costs (show + make buy possible)
        - amount > 0 | bitcount < costs (show + make buy not available)
        - amount > 0 | bitcount > costs (show + make buy possible)