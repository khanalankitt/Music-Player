import Image from "next/image";
export default function Player() {
  return (
    <>
      <div className="player">
        <Image src="/im.png" height={200} width={250} />
        <div className="details">
          <p className="name">Name</p>
          <p className="artist">Artist</p>
        </div>
        <div className="controls">
          <div className="buttons">
            <button>
              <Image src="/previous.png" height={20} width={20} />
            </button>
            <button>
              <Image src="/play.png" height={20} width={20} />
            </button>
            <button>
              <Image src="/next.png" height={20} width={20} />
            </button>
          </div>
          <div className="bar">
            <input type="range" name="" id="" />
            <button>
              <Image src="/volume.png" height={20} width={20} />
            </button>
          </div>
          <div className="others">
            <button>
              <Image src="/bar.png" height={20} width={20} />
            </button>
            <button>
              <Image src="/full.png" height={20} width={20} />
            </button>
            <button>
              <Image src="/shuffle.png" height={20} width={20} />
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
