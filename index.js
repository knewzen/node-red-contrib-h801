module.exports = function(RED) 
{
    //variables placed here are shared by all nodes

    //NodeRED node constructor
    function NodeRedH801(config) 
    {
        RED.nodes.createNode(this, config);
        var thisNode = this;

    }

    //NodeRED registration
    RED.nodes.registerType("h801", NodeRedH801, {
      
    });
}
