import React from 'react';

const Relative = ({relative, deleteRelative}) => {
    return(
        <div>
            <span>{relative.name}</span>
            <button onClick={() => deleteRelative(relative._id)}>Delete</button>
        </div>
    )
}

// Older export syntax
// module.exports = Relative;
// Newer export syntax
export default Relative;