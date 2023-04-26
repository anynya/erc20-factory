const CloneFactory = artifacts.require("CloneFactory");
const ERC20Template = artifacts.require("ERC20Template");
const ERC20Factory = artifacts.require("ERC20Factory");
const MintableERC20Template = artifacts.require("InitializableMintableERC20");

module.exports = async (deployer, network, accounts) => {
    await deployer.deploy(CloneFactory);
    CloneFactoryAddress = CloneFactory.address;

    await deployer.deploy(ERC20Template);
    ERC20TemplateAddress = ERC20Template.address;

    await deployer.deploy(MintableERC20Template);
    MintableERC20TemplateAddress = MintableERC20Template.address;

    await deployer.deploy(
        ERC20Factory,
        CloneFactoryAddress,
        ERC20TemplateAddress,
        MintableERC20TemplateAddress
    );
    ERC20FactoryAddress = ERC20Factory.address;
}
