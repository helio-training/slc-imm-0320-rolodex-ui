import React from 'react';

const Relative = ({ relative, deleteRelative, updateRelative }) => {
    return(
        <div>
            <span>{relative.name}</span>
            <button onClick={() => deleteRelative(relative._id)}>Delete</button>
            <button onClick={() => updateRelative(relative)}>Edit</button>
        </div>
    )
}

// Older export syntax
// module.exports = Relative;
// Newer export syntax
export default Relative;