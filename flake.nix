{
  description = "Node.js devShell";

  inputs = {
    nixpkgs.url = "github:NixOS/nixpkgs/nixos-25.05";
  };

  outputs = { self, nixpkgs }:
    let
      system = builtins.currentSystem;
      pkgs = import nixpkgs { inherit system; };
    in {
      devShells.${system}.default = pkgs.mkShell {
        buildInputs = [
          pkgs.nodejs_22
        ];

        shellHook = ''
          echo "🧑‍💻 Node devShell loaded!"
          node --version
        '';
      };
    };
}
