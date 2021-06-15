package model;

import java.util.ArrayList;
import java.util.Random;

import view.Sl_Pane;

public class Sl_spiel {
	
	public static ArrayList<Sl_Spieler> spieler = new ArrayList<>();
	
	public Sl_spiel() {
	
	}
	Sl_Spieler s1 = new Sl_Spieler("Spieler1", 1);
	Sl_Spieler s2 = new Sl_Spieler("Spieler2", 1);
	Sl_Spieler s3 = new Sl_Spieler("Spieler3", 1);
	Sl_Spieler s4 = new Sl_Spieler("Spieler4", 1);
	
	
	public void erstelleSpieler(int anz) {
		try {
			switch(anz) {
			case 2:
				spieler.add(s1);
				spieler.add(s2);
				break;
			case 3:
				spieler.add(s1);
				spieler.add(s2);
				spieler.add(s3);
				break;
			case 4:
				spieler.add(s1);
				spieler.add(s2);
				spieler.add(s3);
				spieler.add(s4);
				break;
			}
		} catch (NullPointerException e) {
		    e.printStackTrace();
		}
		System.out.println(anz + " Spieler erstellt");
		System.out.println(spieler.size());
	}
	
	public int wuerfeln() {
		Random r = new Random();
		return r.nextInt(6)+1;
	}
	
	public int feld_leiter(int akt_feld) {
		switch(akt_feld) {
		case 6:
			return 16;
		case 11: 
			return 32;
		case 20:
			return 38;
		case 21:
			return 60;
		case 24:
			return 74;
		case 35:
			return 47;
		case 51:
			return 67;
		case 73:
			return 93;
		case 78:
			return 100;
		default:
			return akt_feld;
		
		}
		
	}
	
	public int feld_schlange(int akt_feld) {
		switch(akt_feld) {
		case 14: 
			return 4;
		case 31:
			return 9;
		case 44:
			return 26;
		case 56:
			return 53;
		case 62:
			return 19;
		case 64:
			return 42;
		case 91:
			return 71;
		case 95:
			return 75;
		case 98:
			return 80;
		default:
			return akt_feld;
		}
	}
	
	public int koordx(int akt_feld) {
		if(akt_feld==1||akt_feld==20||akt_feld==21||akt_feld==40||akt_feld==41||akt_feld==60||akt_feld==61||akt_feld==80||akt_feld==81||akt_feld==100) {
			return 280; //280
		}
		else if(akt_feld==2||akt_feld==19||akt_feld==22||akt_feld==39||akt_feld==42||akt_feld==59||akt_feld==62||akt_feld==79||akt_feld==82||akt_feld==99) {
			return 330; //370
		}
		else if(akt_feld==3||akt_feld==18||akt_feld==23||akt_feld==38||akt_feld==43||akt_feld==58||akt_feld==63||akt_feld==78||akt_feld==83||akt_feld==98) {
			return 410; //460
		}
		else if(akt_feld==4||akt_feld==17||akt_feld==24||akt_feld==37||akt_feld==44||akt_feld==57||akt_feld==64||akt_feld==77||akt_feld==84||akt_feld==97) {
			return 500; //550 
		}
		else if(akt_feld==5||akt_feld==16||akt_feld==25||akt_feld==36||akt_feld==45||akt_feld==56||akt_feld==65||akt_feld==76||akt_feld==85||akt_feld==96) {
			return 570; //630
		}
		else if(akt_feld==6||akt_feld==15||akt_feld==26||akt_feld==35||akt_feld==46||akt_feld==55||akt_feld==66||akt_feld==75||akt_feld==86||akt_feld==95) {
			return 670; //720
		}
		else if(akt_feld==7||akt_feld==14||akt_feld==27||akt_feld==34||akt_feld==47||akt_feld==54||akt_feld==67||akt_feld==74||akt_feld==87||akt_feld==94) {
			return 750; //800
		}
		else if(akt_feld==8||akt_feld==13||akt_feld==28||akt_feld==33||akt_feld==48||akt_feld==53||akt_feld==68||akt_feld==73||akt_feld==88||akt_feld==93) {
			return 840; //890
		}
		else if(akt_feld==9||akt_feld==12||akt_feld==29||akt_feld==32||akt_feld==49||akt_feld==52||akt_feld==69||akt_feld==72||akt_feld==89||akt_feld==92) {
			return 920; //970
		}
		else if(akt_feld==10||akt_feld==11||akt_feld==30||akt_feld==31||akt_feld==50||akt_feld==51||akt_feld==70||akt_feld==71||akt_feld==90||akt_feld==91) {
		    return 1010; //1060	
		}
		return 0;
	}
	
	public int koordy(int akt_feld) {
		if(akt_feld<=10) {
			return 780;
		}
		else if(akt_feld>10&&akt_feld<=20) {
			return 700;
		}
		else if(akt_feld>20&&akt_feld<=30) {
			return 610;
		}
		else if(akt_feld>30&&akt_feld<=40) {
			return 520;
		}
		else if(akt_feld>40&&akt_feld<=50) {
			return 440;
		}
		else if(akt_feld>50&&akt_feld<=60) {
			return 350;
		}
		else if(akt_feld>60&&akt_feld<=70) {
			return 270;
		}
		else if(akt_feld>70&&akt_feld<=80) {
			return 180;
		}
		else if(akt_feld>80&&akt_feld<=90) {
			return 90;
		}
		else if(akt_feld>90&&akt_feld<=100) {
			return 5;
		}
		return 0;
	}
	
	public boolean checkWin(int aktfeld) {
		if(aktfeld>=100) {
			return true;
		}
		else {
			return false;
		}
	}

}
