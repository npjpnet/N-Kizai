class Kizai {
  private msg: string;

  constructor(msg: string) {
    this.msg = msg;
  }

  public start() {
    console.log(this.msg);
  }
}

const kizai = new Kizai('N-Kizai');
kizai.start();
