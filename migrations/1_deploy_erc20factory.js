const CloneFactory = artifacts.require("CloneFactory");
const ERC20Template = artifacts.require("ERC20Template");
const ERC20Factory = artifacts.require("ERC20Factory");
const MintableERC20Template = artifacts.require("InitializableMintableERC20");



module.exports = async (deployer, network, accounts) => {
    await deployer.deploy(CloneFactory);
    CloneFactoryAddress = CloneFactory.address;
    logger.log("CloneFactoryAddress: ", CloneFactoryAddress);

    await deployer.deploy(ERC20Template);
    ERC20TemplateAddress = ERC20Template.address;
    logger.log("ERC20TemplateAddress: ", ERC20TemplateAddress);

    await deployer.deploy(MintableERC20Template);
    MintableERC20TemplateAddress = MintableERC20Template.address;
    logger.log("MintableERC20TemplateAddress: ", MintableERC20TemplateAddress);

    await deployer.deploy(
        ERC20Factory,
        CloneFactoryAddress,
        ERC20TemplateAddress,
        MintableERC20TemplateAddress
    );
    ERC20FactoryAddress = ERC20Factory.address;
    logger.log("ERC20FactoryAddress: ", ERC20FactoryAddress);
}